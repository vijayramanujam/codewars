function smallEnough(a, limit){

    b = a.filter(elem => elem > limit)
    return b.length > 0 ? false:true

}
