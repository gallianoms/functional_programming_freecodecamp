// Cambia solo el código debajo de esta línea
function urlSlug(title) {

    return title.toLowerCase()
    .trim()
    .split(' ')
    .filter(word => word !== '')
    .join('-')

}
// Cambia solo el código encima de esta línea
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");