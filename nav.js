var key = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['z','x','c','v','b','n','m']
]
var hash = {
    q : "qq.com",
    w : "weibo.com",
    e : "",
    r : "",
    t : "tieba.baidu.com",
    y : "youtube.com",
    u : "",
    i : "iqiyi.com",
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
/*
**取出里面存的值
*/
var hashInLocalStorage =  JSON.parse(localStorage.getItem('save')||'null')
if(hashInLocalStorage){
    hash = hashInLocalStorage
}
/*
**主体
*/
for(var i=0;i<key.length;i++){
    var div1 = document.createElement('div')
    div1.className = "row"
    var mainly = document.getElementById('x')
        mainly.appendChild(div1)
    for(var j=0;j<key[i].length;j++){
        var kbd1 = document.createElement('kbd')
        kbd1.textContent = key[i][j]
        kbd1.className = 'key'
        div1.appendChild(kbd1)
        var edit = document.createElement('button')
        edit.textContent = 'E'
        edit.id = key[i][j]
        kbd1.appendChild(edit)
        img = document.createElement('img')
        if(hash[key[i][j]]){
            img.src = 'http://' + hash[key[i][j]] + "/favicon.ico"
            kbd1.appendChild(img)    
        }else{

        }
        edit.onclick = function(ac){
         keyc = ac.target.id
         console.log(keyc); 
         webs = prompt('给我一个网址')
         hash[keyc] = webs
         //有变更以后马上把hash存入loaclstorage
         localStorage.setItem('save',JSON.stringify(hash))
        }
        img.onerror = function(){
            alert('下载失败')
        }
    }
}
/*
**错误监听
*/
document.onkeypress = function(a){
    key = a.key
    website = hash[key]
    //location.href = 'http://' + website
    window.open('http://' + website,'_blanak')
}


var a = 1
if(a = 3)
    console.log('a等于3')


