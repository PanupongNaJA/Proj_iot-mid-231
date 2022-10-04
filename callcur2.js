
    function postdata(){
        var st_id = document.querySelector('#loginid').value;
        var st_name = document.querySelector('#loginname').value;
        var sensor_name = document.querySelector('#loginsname').value;
        var sensor_type = document.querySelector('#loginstype').value;
        var sensor_unit = document.querySelector('#loginsunit').value;
        var sensor_value = document.querySelector('#loginsvalue').value;
        var datapost = {
            "st_id": `${st_id}.`,
            "st_name": `${st_name}.`,
            "sensor_name": `${sensor_name}.`,
            "sensor_type": `${sensor_type}.`,
            "sensor_unit": `${sensor_unit}.`,
            "sensor_value": `${sensor_value}.`
      }
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/student_post',{
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(datapost)
        })
        .then(response => console.log(response))
        .catch(error => console.log(error));
        
        return false;
    }

    function flowtransducer(){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // let list = document.querySelector('#list');
            var id = document.querySelector('#idflow').value;
            var sensor_name = data[id].name;
            var sensor_type= data[id].type;
            var sensor_unit = data[id].unit;
            var sensor_range = data[id].range;
            var sensor_plantsite = data[id]["plant-site"];
            var sensor_value = data[id].value;
            document.querySelector('#fname').innerHTML = `Name : ${sensor_name}.`;
            document.querySelector('#ftype').innerHTML = `Type : ${sensor_type}.`;
            document.querySelector('#funit').innerHTML = `unit : ${sensor_unit}.`;
            document.querySelector('#frange').innerHTML = `Range : ${sensor_range}.`;
            document.querySelector('#fplant-site').innerHTML = `Plant-Site : ${sensor_plantsite}.`;
            document.querySelector('#fvalue').innerHTML = `Value : ${sensor_value}.`;
        })  
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
    }

    function leveltransducer(){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // let list = document.querySelector('#list');
            var id = document.querySelector('#idlevel').value;
            var sensor_name = data[id].name;
            var sensor_type= data[id].type;
            var sensor_unit = data[id].unit;
            var sensor_range = data[id].range;
            var sensor_plantsite = data[id]["plant-site"];
            var sensor_value = data[id].value;
            document.querySelector('#lname').innerHTML = `Name : ${sensor_name}.`;
            document.querySelector('#ltype').innerHTML = `Type : ${sensor_type}.`;
            document.querySelector('#lunit').innerHTML = `unit : ${sensor_unit}.`;
            document.querySelector('#lrange').innerHTML = `Range : ${sensor_range}.`;
            document.querySelector('#lplant-site').innerHTML = `Plant-Site : ${sensor_plantsite}.`;
            document.querySelector('#lvalue').innerHTML = `Value : ${sensor_value}.`;
        })  
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
    }

    function temperaturetransducer(){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // let list = document.querySelector('#list');
            var id = document.querySelector('#idtemp').value;
            var sensor_name = data[id].name;
            var sensor_type= data[id].type;
            var sensor_unit = data[id].unit;
            var sensor_range = data[id].range;
            var sensor_plantsite = data[id]["plant-site"];
            var sensor_value = data[id].value;
            document.querySelector('#tname').innerHTML = `Name : ${sensor_name}.`;
            document.querySelector('#ttype').innerHTML = `Type : ${sensor_type}.`;
            document.querySelector('#tunit').innerHTML = `unit : ${sensor_unit}.`;
            document.querySelector('#trange').innerHTML = `Range : ${sensor_range}.`;
            document.querySelector('#tplant-site').innerHTML = `Plant-Site : ${sensor_plantsite}.`;
            document.querySelector('#tvalue').innerHTML = `Value : ${sensor_value}.`;
        })  
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
    }

    function pressuretransducer(){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // let list = document.querySelector('#list');
            var id = document.querySelector('#idpress').value;
            var sensor_name = data[id].name;
            var sensor_type= data[id].type;
            var sensor_unit = data[id].unit;
            var sensor_range = data[id].range;
            var sensor_plantsite = data[id]["plant-site"];
            var sensor_value = data[id].value;
            document.querySelector('#pname').innerHTML = `Name : ${sensor_name}.`;
            document.querySelector('#ptype').innerHTML = `Type : ${sensor_type}.`;
            document.querySelector('#punit').innerHTML = `unit : ${sensor_unit}.`;
            document.querySelector('#prange').innerHTML = `Range : ${sensor_range}.`;
            document.querySelector('#pplant-site').innerHTML = `Plant-Site : ${sensor_plantsite}.`;
            document.querySelector('#pvalue').innerHTML = `Value : ${sensor_value}.`;
        })  
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
    }

    document.addEventListener('DOMContentLoaded', function (){
        document.querySelector('#flowtransducer').onsubmit = flowtransducer;
    });
    document.addEventListener('DOMContentLoaded', function (){
        document.querySelector('#leveltransducer').onsubmit = leveltransducer;
    });
    document.addEventListener('DOMContentLoaded', function (){
        document.querySelector('#temperaturetransducer').onsubmit = temperaturetransducer;
    });
    document.addEventListener('DOMContentLoaded', function (){
        document.querySelector('#pressuretransducer').onsubmit = pressuretransducer;
    });
    document.addEventListener('DOMContentLoaded', function (){
        document.querySelector('#login').onsubmit = postdata;
    });
   

    

