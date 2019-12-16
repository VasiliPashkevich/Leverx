class Computer{
  constructor(numberOfCores,  frequency, manufacturer, ramSizeAndType)   {
    this.numberOfCores = numberOfCores;
    this.frequency = frequency;
    this.manufacturer = manufacturer;
    this.ramSizeAndType = ramSizeAndType;
  }
    
    get numberOfCores() {
      return this.numberOfCores;
    }
    set numberOfCores(numberOfCores) {
      this._numberOfCores = numberOfCores;
    }
  
    get ramSizeAndType() {
      return this.ramSizeAndType;
    }
    set ramSizeAndType(ramSizeAndType){
      this._ramSizeAndType = ramSizeAndType;
    }
  
    get manufactrer() {
      return this.manufacturer;
    }
    set manufactrer(manufacturer) {
      this._manufacturer = manufacturer;
    }
    
    get frequency() {
      return this.frequency;
    }
    set frequency(frequency) {
      this._frequency = frequency;
    }
  }
  
  class Ultrabook extends Computer {
      constructor (numberOfCores,  manufacturer, frequency, ramSizeAndType, processorType) {
        super(...arguments);
        this.processorType = processorType;
      }
    
      get processorType() {
        return this.processorType;
      }
      set processorType (processorType) {
        this._processorType = processorType;
      }
  }
  
  class Server extends Computer {
    constructor (numberOfCores,  manufacturer, frequency, ramSizeAndType, architectureBitDepth) {
      super(...arguments);
      this.architectureBitDepth = architectureBitDepth;
    }
  
    get architectureBitDepth() {
      return this.architectureBitDepth;
    }
    set architectureBitDepth (architectureBitDepth) {
      this._architectureBitDepth = architectureBitDepth;
    }
  }
    

  
    var elem = document.createElement('div');

    document.getElementById("ultrabook").onclick = function(){

      var elemU = document.createElement("div"),
      before = document.getElementById("before"); 
      elemU.setAttribute('class', 'form-group');
      elemU.id="show_input"; 
       
      elem.id = "element";
      before.parentNode.insertBefore(elem, before);
    
      document.getElementById("element").innerHTML = "";
  
        var labU = document.createElement("label");
        labU.setAttribute('for', 'cprocessorType');
        labU.innerText = "Processor type";
    
        var inpU = document.createElement("input");
        inpU.setAttribute('type', 'text');
        inpU.setAttribute('class', 'form-control');
        inpU.setAttribute('id', 'cprocessorType');
        inpU.setAttribute('placeholder', 'Enter processor type');
     
      elemU.appendChild(labU);
      elemU.appendChild(inpU);
  
      
      elem.appendChild(elemU);  
  }

  document.getElementById("server").onclick = function(){

    var elemS = document.createElement("div"),
    before = document.getElementById("before"); 
    elemS.setAttribute('class', 'form-group');
    elemS.id="show_input"; 
     
    elem.id = "element";
    before.parentNode.insertBefore(elem, before);
  
    document.getElementById("element").innerHTML = "";

      var labS = document.createElement("label");
      labS.setAttribute('for', 'cprocessorType');
      labS.innerText = "Architecture bit depth";
  
      var inpS = document.createElement("input");
      inpS.setAttribute('type', 'text');
      inpS.setAttribute('class', 'form-control');
      inpS.setAttribute('id', 'carchitectureBitDepth');
      inpS.setAttribute('placeholder', 'Enter architecture bit depth');
   
    elemS.appendChild(labS);
    elemS.appendChild(inpS);

    
    elem.appendChild(elemS);  
}


function onCreate(ev) {
    ev.preventDefault();
    if (document.getElementById('ultrabook').checked)
    {
      var data = JSON.stringify({
        "manufacturer": String(document.getElementById("cmanufacturer").value),
        "frequency": String(document.getElementById("cfrequency").value),
        "numberOfCores": String(document.getElementById("cnumberOfCores").value),
        "ramSizeAndType": String(document.getElementById("cramSizeAndType").value), 
        "processorType": String(document.getElementById('cprocessorType').value)
      });
      console.log(data);
      xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
              alert(this.responseText);
              document.getElementById("createForm").dispatchEvent(new Event('submit'));
          } 
      });
  
      xhr.open("POST", "http://localhost:2403/ultrabook/");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(data);
    }
      else if(document.getElementById('server').checked)
        var data = JSON.stringify({
          "manufacturer": String(document.getElementById("cmanufacturer").value),
          "frequency": String(document.getElementById("cfrequency").value),
          "numberOfCores": String(document.getElementById("cnumberOfCores").value),
          "ramSizeAndType": String(document.getElementById("cramSizeAndType").value), 
          "architectureBitDepth": String(document.getElementById('carchitectureBitDepth').value)
        });
        console.log(data);
        xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                alert(this.responseText);
                document.getElementById("createForm").dispatchEvent(new Event('submit'));
            } 
        });
          xhr.open("POST", "http://localhost:2403/server/");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
      }

  
  


function onRead() {
    console.log('allahu akbar');
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    var change = document.createElement("th");
    change.setAttribute('scope', 'col');
    document.getElementById("table_id").appendChild(change);

    if (document.getElementById("ultrabook").checked) {
    change.innerText = "Prosessor type";
    var link = "http://localhost:2403/ultrabook/";
    }

    else if((document.getElementById("server").checked)) {
      change.innerText = "Architecture bit depth";
      var link = "http://localhost:2403/server/";
    }

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            result=JSON.parse(this.response);
            var resultTBody=document.createElement('tbody');
            result.map(function(nthCPU){
                resultTBody.appendChild(parseCPUToTableRow(nthCPU));
            });

            var table=document.getElementById('rTBody').parentElement;
            table.replaceChild(resultTBody,document.getElementById('rTBody'));
            resultTBody.id='rTBody';
            console.log('success');
        }
    });

    xhr.open("GET", link);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}
function onPrepareUpdate(ev){
  ev.preventDefault();
  
  if (document.getElementById("ultrabook").checked) {
    var link = "http://localhost:2403/ultrabook/";

    var elemU = document.createElement("div"),
    before = document.getElementById("ubutton"); 
    elemU.setAttribute('class', 'form-group');
    elemU.id="uprocessorType"; 
  
    before.parentNode.insertBefore(elem, before);

    }

    else if((document.getElementById("server").checked)) {
      var link = "http://localhost:2403/server/";

      var elemS = document.createElement("div"),
    before = document.getElementById("ubutton"); 
  elemS.setAttribute('class', 'form-group');
  elemS.id="show_input"; 

  elem.id = "element";
  
    document.getElementById("element").innerHTML = "";

    var labS = document.createElement("label");
     labS.setAttribute('for', 'uparchitectureBitDepth');
     labS.innerText = "Architecture bit depth";
    

    var inpS = document.createElement("input");
    inpS.setAttribute('type', 'text');
    inpS.setAttribute('class', 'form-control');
    inpS.setAttribute('id', 'uparchitectureBitDepth');
    inpS.setAttribute('placeholder', 'Enter length');
  

  elemS.appendChild(labS);
  elemS.appendChild(inpS);

  elem.appendChild(elemS);
  before.parentNode.insertBefore(elem, before);

    }


  xhrids = new XMLHttpRequest();
  xhrids.withCredentials = true;

  xhrids.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
          //console.log(this.response);
          result=JSON.parse(this.response);
          var ids=document.createElement('select');
          ids.className='form-control';
          result.map(function(nthCPU){
              var id=document.createElement('option');
              id.innerHTML=nthCPU['id'];
              ids.appendChild(id);
          });
          var form=document.getElementById('uid').parentElement;
          form.replaceChild(ids,document.getElementById('uid'));
          ids.id='uid';
      }
  });
  xhrids.open("GET", link);
  xhrids.setRequestHeader("Content-Type", "application/json");
  xhrids.send();
}


function onUpdate(ev) {
  ev.preventDefault();


  if (document.getElementById("ultrabook").checked) {
    var link = "http://localhost:2403/ultrabook/";


    var data = JSON.stringify({
      "manufacturer": String(document.getElementById("umanufacturer").value),
      "frequency": String(document.getElementById("ufrequency").value),
      "numberOfCores": String(document.getElementById("unumberOfCores").value),
      "ramSizeAndType": String(document.getElementById("uramSizeAndType").value), 
      "processorType": String(document.getElementById('cprocessorType').value)
    });
    }

    else if((document.getElementById("server").checked)) {
      var link = "http://localhost:2403/server/";
      var data = JSON.stringify({
          "manufacturer": String(document.getElementById("umanufacturer").value),
          "frequency": String(document.getElementById("ufrequency").value),
          "numberOfCores": String(document.getElementById("unumberOfCores").value),
          "ramSizeAndType": String(document.getElementById("uramSizeAndType").value), 
          "architectureBitDepth": String(document.getElementById('uparchitectureBitDepth').value)
      });
    }

  console.log(data);
  xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
          console.log(this.responseText);
      }
  });

  xhr.open("PUT", link+document.getElementById("uid").value);
  xhr.setRequestHeader("Content-Type", "application/json");
  console.log(document.getElementById("uid").value);
  xhr.send(data);
}



function onDelete(ev) {
    ev.preventDefault();
     xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("DELETE", "http://localhost:2403/ultrabook/"+document.getElementById("did").value);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function parseCPUToTableRow(CPUs){
    var row=document.createElement('tr');

    id=document.createElement('th');
    id.innerText=CPUs['id'];
    row.appendChild(id);

    manufacturer=document.createElement('td');
    manufacturer.innerText=CPUs['manufacturer'];
    row.appendChild(manufacturer);

    numberOfCores=document.createElement('td');
    numberOfCores.innerText=CPUs['numberOfCores'];
    row.appendChild(numberOfCores);
   
    ramSizeAndType=document.createElement('td');
    ramSizeAndType.innerText=CPUs['ramSizeAndType'];
    row.appendChild(ramSizeAndType);
    
    frequency=document.createElement('td');
    frequency.innerText=CPUs['frequency'];
    row.appendChild(frequency);

    if (document.getElementById("ultrabook").checked) {
      architectureBitDepth=document.createElement('td');
    architectureBitDepth.innerText=CPUs['processorType'];
    row.appendChild(architectureBitDepth);
      var link = "http://localhost:2403/ultrabook/";
      }
  
      else if((document.getElementById("server").checked)) {
        architectureBitDepth=document.createElement('td');
        architectureBitDepth.innerText=CPUs['architectureBitDepth'];
        row.appendChild(architectureBitDepth);
        var link = "http://localhost:2403/server/";
      }

    return row;
}


(function () {
  
    document.getElementById('cbutton').addEventListener(
        'click', onCreate
    );
    document.getElementById('rbutton').addEventListener(
        'click', onRead
    );
    document.getElementById('ubutton').addEventListener(
        'click', onUpdate
    );
    document.getElementById('pubutton').addEventListener(
        'click', onPrepareUpdate
    );
    document.getElementById('dbutton').addEventListener(
        'click', onDelete
    );
    console.log('Handlers is set')
})()