using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp2
{
    public class ReturnValue
    {
        public List<List<int>> fun()
        {
            var myList = new List<KeyValuePair<string, string>>();
            var twoDList = new List<List<int>>();
            var map = new Dictionary<string, int>();

            myList.Add(new KeyValuePair<string, string>("BD", "Root"));
            myList.Add(new KeyValuePair<string, string>("Dhaka", "BD"));
            myList.Add(new KeyValuePair<string, string>("Rajshahi", "Dhaka"));
            myList.Add(new KeyValuePair<string, string>("Khulna", "Dhaka"));
            myList.Add(new KeyValuePair<string, string>("Chittagong", "Dhaka"));
            myList.Add(new KeyValuePair<string, string>("Chapainawabgonj", "Rajshahi"));
            map["Root"] = 0;
            map["BD"] = 1;
            map["Dhaka"] = 2;
            map["Rajshahi"] = 3;
            map["Khulna"] = 4;
            map["Chittagong"] = 5;
            map["Chapainawabgonj"] = 6;
            var remap = new Dictionary<int, string>();
            remap[0] = "Root";
            remap[1] = "BD";
            remap[2] = "Dhaka";
            remap[3] = "Rajshahi";
            remap[4] = "Khulna";
            remap[5] = "Chittagong";
            remap[6] = "Chapainawabgonj";

            for (int i = 0; i < map.Count; i++)
                twoDList.Add(new List<int>());

            foreach (var val in myList)
            {
                int i = map[val.Value];
                int v = map[val.Key];
                twoDList[i].Add(v);

            }

            for (int i = 0; i < twoDList.Count; i++)
            {
                int l = twoDList[i].Count;
                for (int j = 0; j < l; j++)
                {
                    Console.Write(twoDList[i][j] + " ");

                }
                Console.Write("ParrentId " + i);


                Console.WriteLine();
            }
            return twoDList;

        }
    }
}
