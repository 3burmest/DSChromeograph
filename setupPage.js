var sending = null;
var time = "";
// create an observer instance
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var observer = new MutationObserver(function(mutations) {
  sending();
});
//observer.observe(arrival,  {childList: true});

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

var arrival = document.getElementById('date_arrival').childNodes[1];

var f = document.getElementById("command-data-form");

var table = getElementByXpath('//form[@id="command-data-form"]/table[1]/tbody');

var nm = document.createTextNode('Geplante Ankunft:');
var nmEl = document.createElement('TD');
nmEl.appendChild(nm);

var tmEl = document.createElement('TD');
var tm = document.createElement('input');
tm.type = "text";
var st = document.createElement('button');
st.innerHTML = "Start";
st.type = "button"
st.addEventListener("click", function(){
    time = tm.value;
    tmEl.appendChild(document.createTextNode(time));
    observer.observe(arrival,  {childList: true});
}, false);
tmEl.appendChild(tm)
tmEl.appendChild(st)

var tr = document.createElement('TR');
tr.appendChild(nmEl);
tr.appendChild(tmEl);
table.appendChild(tr);

sending = function() {
    var t = time.split(":");
    var ms = t[3];
    console.log(ms);
    t = t.slice(0,3).join(":");
    if (arrival.innerHTML.substr(9) == t){
        setTimeout(function(){HTMLFormElement.prototype.submit.call(f);}, ms || 0);
    }
}

//alert(document.getElementById('date_arrival').childNodes[1].innerHTML)
