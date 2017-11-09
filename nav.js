var key = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['z','x','c','v','b','n','m']
]
var hash = {
    q : "qq.com",
    w : "weibo.com",
    e : "ele.com",
    r : "renren.com",
    t : "tecent.com",
    y : "yahoo.com",
    u : "",
    i : "",
    o : "",
    p : "",
    a : "alibaba.com",
    s : "souhu.com",
    d : "",
    f : "",
    g : "",
    h : "",
    j : "",
    k : "",
    l : "linkedin.com",
    z : "zhihu.com",
    x : "",
    c : "",
    v : "",
    b : "",
    n : "",
    m : "meituan.com"
}
//取出里面存的值
var hashInLocalStorage = JSON.parse(localStorage.getItem('save'||'null'))
if(hashInLocalStorage){
    hash = hashInLocalStorage
}
for(var i=0;i<key.length;i++){
    var div1 = document.createElement('div')
    var mainly = document.getElementById('x')
        mainly.appendChild(div1)
    for(var j=0;j<key[i].length;j++){
        var kbd1 = document.createElement('kbd')
        kbd1.textContent = key[i][j]
        div1.appendChild(kbd1)
        var edit = document.createElement('button')
        edit.textContent = 'E'
        edit.id = key[i][j]
        kbd1.appendChild(edit)
        edit.onclick = function(ac){
         keyc = ac.target.id
         webs = prompt('给我一个网址')
         hash[keyc] = webs
         //有变更以后马上把hash存入loaclstorage
         localStorage.setItem('save',JSON.stringify(hash))
        }
        var edit = document.createElement('button')
        edit.textContent = 'D'
        kbd1.appendChild(edit)
    }
}
document.onkeypress = function(a){
    key = a.key
    website = hash[key]
    //location.href = 'http://' + website
    window.open('http://' + website,'_blanak')
}


