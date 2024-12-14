import React from 'react';
import '../index.css';

const Languages = () => {
    const data =[
        {
            title:"Programming Languages",
            contents:["C#","java","python","javascript","c++","c"]
        },
        {
            title:"Frameworks",
            contents:[".NET Core","ASP.NET Core","React","Node.js","MVC","Web API"]
        },
        {
            title:"Software",
            contents:["Visual Studio 2017,2022","vscode"]
        },
        {
            title:"Database",
            contents:["SQL Server","MySQL","MongoDB","Firebase","SQLite"]
        },



    ]
  return (
    <section id="languages" data-aos ="fade">
        {
            data.map(item =>(
                <div className="languages-box"key={item.title}> 
                <h3>{item.title}</h3>
                <ul>
                    {
                        item.contents.map(content =>(
                            <li key ={content}>{content}</li>
                        ))
                    }
                </ul>

                </div>
            )

            )
        }
      
    </section>
  )
}

export default Languages
