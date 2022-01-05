import React from 'react'


function Categories() {
    return (
        <div className="categories">
            <button onClick="myFunction()"
               class="dropbtn">Categories</button>
                   <div id='mycategories'
                     class='categories-content'>
                         <a href="/crops">fruits</a><br/>
                        <a href="/crops">vegetable</a>
                     </div> 
       
        </div>
    )
}


export default Categories
