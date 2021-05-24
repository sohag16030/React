using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp2
{
    class Program
    {
        public class Comment
        {
            public int Id { get; set; }
            public int ParentId { get; set; }
            public string Text { get; set; }
            public List<Comment> Children { get; set; }
        }

        public static void Main(string[] args)
        {
            ReturnValue r1 = new ReturnValue();
            var twoDList = new List<List<int>>();
            twoDList = r1.fun();

            List<Comment> categories = new List<Comment>()
            {

                new Comment () { Id = 1, Text = "BD", ParentId = 0},
                new Comment() { Id = 2, Text = "Dhaka", ParentId = 1 },
                new Comment() { Id = 3, Text = "Rajshahi", ParentId = 2 },
                new Comment() { Id = 4, Text = "Khulna", ParentId = 2 },
                new Comment() { Id = 5, Text = "Chittagong", ParentId = 2 },
                new Comment() { Id = 6, Text = "Chapainawabgonj", ParentId = 3 },
            };


            List<Comment> hierarchy = new List<Comment>();
            hierarchy = categories
                            .Where(c => c.ParentId == 0)
                            .Select(c => new Comment()
                            {
                                Id = c.Id,
                                Text = c.Text,
                                ParentId = c.ParentId,
                                Children = GetChildren(categories, c.Id)
                            })
                            .ToList();

            HieararchyWalk(hierarchy);

            Console.ReadLine();
        }

        public static List<Comment> GetChildren(List<Comment> comments, int parentId)
        {
            return comments
                    .Where(c => c.ParentId == parentId)
                    .Select(c => new Comment
                    {
                        Id = c.Id,
                        Text = c.Text,
                        ParentId = c.ParentId,
                        Children = GetChildren(comments, c.Id)
                    })
                    .ToList();
        }

        public static void HieararchyWalk(List<Comment> hierarchy)
        {
            if (hierarchy != null)
            {
                foreach (var item in hierarchy)
                {
                    Console.WriteLine(string.Format("{0} {1}", item.Id, item.Text));
                    HieararchyWalk(item.Children);
                }
            }
        }

    }
}
