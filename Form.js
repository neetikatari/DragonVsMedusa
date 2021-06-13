class Form {
    display(){
        var title = createElement ("h1")
        title.html("Dragon vs Medusa")
        title.position(450,70)
        title.style("font-size",90)
        var button1 = createButton("PLAY")
        var button2 = createButton("STORY")
        var button3 = createButton("How to play")
        var button4 = createButton("Select Background")
        button1.position(500,150)
        button2.position(500,200)
        button3.position(500,250)
        button4.position(500,300)
        button1.mousePressed(()=>{
            button1.hide()
            button2.hide()
            button3.hide()
            button4.hide()
            title.hide()
            gameState=1
        })
        button2.mousePressed(()=>{
            gameState=2
            button1.hide()
            button2.hide()
            button3.hide()
            button4.hide()
            title.hide()
        })
        button3.mousePressed(()=>{
            gameState=3
            button1.hide()
            button2.hide()
            button3.hide()
            button4.hide()
            title.hide()
        })
        button4.mousePressed(()=>{
            gameState=4
            button1.hide()
            button2.hide()
            button3.hide()
            button4.hide()
            title.hide()
        })
        
    }

    
}