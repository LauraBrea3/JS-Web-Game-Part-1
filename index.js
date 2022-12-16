function background(path,width,height){
    let background = document.createElement('img')
    background.src = path
    background.style.position = ''
    background.style.width = width + 'px'
    background.style.height = height + 'px'
    document.body.append(background)
    return background
}


function newImage(path,left,bottom){
    let image = document.createElement('img')
    image.src = path
    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    document.body.append(image)
    return image

}

function newItem (path,left,bottom){

    let item = newImage(path,left,bottom)


item.addEventListener('dblclick', function(){
    item.remove()
})

}

// function background(path,width,height){
//     let background = document.createElement('img')
//     background.src = path
//     background.style.position = 'relative'
//     background.style.width = width + 'px'
//     background.style.height = height + 'px'
//     document.body.append(background)
//     return background
// }





newImage('assets/green-character.gif', 100 , 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)
newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165,185)
newItem('assets/staff.png', 600, 100)
background('assets/sky.png', 1500,100)
background('assets/grass.png', 1500, 1500)

// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)