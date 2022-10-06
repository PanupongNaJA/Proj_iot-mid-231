
    function login(){
        var User = document.querySelector('#User').value;
        var Pass = document.querySelector('#Pass').value;
        if (User == "ID" && Pass == "Pass"){
            location.href='page0.html';
        }
        else{
            alert("Incorrect Password. Try again."); 
        }
        return false;
    }

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
        alert("Thank you");
        
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
            document.querySelector('#fname').innerHTML = `${sensor_name}.`;
            document.querySelector('#ftype').innerHTML = `${sensor_type}.`;
            document.querySelector('#funit').innerHTML = `${sensor_unit}.`;
            document.querySelector('#frange').innerHTML = `${sensor_range}.`;
            document.querySelector('#fplant-site').innerHTML = `${sensor_plantsite}.`;
            document.querySelector('#fvalue').innerHTML = `${sensor_value}.`;
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
            document.querySelector('#lname').innerHTML = `${sensor_name}.`;
            document.querySelector('#ltype').innerHTML = `${sensor_type}.`;
            document.querySelector('#lunit').innerHTML = `${sensor_unit}.`;
            document.querySelector('#lrange').innerHTML = `${sensor_range}.`;
            document.querySelector('#lplant-site').innerHTML = `${sensor_plantsite}.`;
            document.querySelector('#lvalue').innerHTML = `${sensor_value}.`;
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
            document.querySelector('#tname').innerHTML = `${sensor_name}.`;
            document.querySelector('#ttype').innerHTML = `${sensor_type}.`;
            document.querySelector('#tunit').innerHTML = `${sensor_unit}.`;
            document.querySelector('#trange').innerHTML = `${sensor_range}.`;
            document.querySelector('#tplant-site').innerHTML = `${sensor_plantsite}.`;
            document.querySelector('#tvalue').innerHTML = `${sensor_value}.`;
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
            document.querySelector('#pname').innerHTML = `${sensor_name}.`;
            document.querySelector('#ptype').innerHTML = `${sensor_type}.`;
            document.querySelector('#punit').innerHTML = `${sensor_unit}.`;
            document.querySelector('#prange').innerHTML = `${sensor_range}.`;
            document.querySelector('#pplant-site').innerHTML = `${sensor_plantsite}.`;
            document.querySelector('#pvalue').innerHTML = `${sensor_value}.`;
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
        document.querySelector('#regis').onsubmit = postdata;
    });
    document.addEventListener('DOMContentLoaded', function (){
        document.querySelector('#login').onsubmit = login;
    });
   

    

