# Schema
Database--- Authors--- author1
          |         |     |__ NAME: "John Doe"
          |         |_ author2
          |         |     |__ NAME: "Peter Pan"
          |         |_ author3
          |               |__ NAME: "Alan Parson"
          |
          |_Articles--- article1
                     |     |__ TITLE: "What happens next?"
                     |     |__ AUTHOR: author1
                     |     |__ BODYTEXT: "Lorem Ipsum..."
                     |
                     |- article2
                     |     |__ TITLE: "What happens before?"
                     |     |__ AUTHOR: author1
                     |     |__ BODYTEXT: "Lorem Ipsum and other words..."
                     |
                     |- article3
                     |     |__ TITLE: "The things I saw."
                     |     |__ AUTHOR: author2
                     |     |__ BODYTEXT: "While I was traveling in Switzerland..."
                     |
                     |- article4
                     |     |__ TITLE: "My wishes"
                     |     |__ AUTHOR: author3
                     |     |__ BODYTEXT: "On the road to Samarkhand..."
