$(document).ready(function(){
  function changeQuote(){
    var colors = ["#E6E6E6","green","yellow", "orange", "white"];
    var quotes = {text: ["That is not dead which can eternal lie, And with strange aeons even death may die.",
                          "Imagination will often carry us to worlds that never where. But without it, we go nowhere.",
                          "Especially important is the warning to avoid conversations with the demon. We may ask what is relevant but anything beyond that is dangerous. He is a liar. The demon is a liar. He will lie to confuse us. But he will also mix lies with the truth to attack us. The attack is psychological, Damien, and powerful. So don't listen to him. Remember that - do not listen.",
                          "To say that nothing is true, is to realize that the foundations of society are fragile, and that we must be the shepherds of our own civilization. To say that everything is permitted, is to understand that we are the architects of our actions, and that we must live with their consequences, whether glorious or tragic.",
                          "Everybody's worried about stopping terrorism. Well, there's a really easy way: stop participating in it."
                          ],
                  author: ["H.P Lovecraft",
                            "Carl Sagan",
                            "Father Merrin, The Exorcist",
                            "Ezio Auditore da Firenze, Assassins Creed: Revelations",
                            "Noam Chomsky"
                          ]
                  }


    var iColors = Math.floor(Math.random()*colors.length);
    var iQuotes = Math.floor(Math.random()*quotes.text.length)

    $('.internal').css("background", colors[iColors]);
    $('.main-background').css("background", colors[iColors]);
    $(".internal").html("<p>" + quotes.text[iQuotes] +"</p><p>&#8212;" + quotes.author[iQuotes] + "</p>");
  }

  changeQuote();
  $("#btn-quote").click(changeQuote);
});
