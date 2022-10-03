
document.addEventListener('DOMContentLoaded',function (){        
    document.querySelector('form').onsubmit = function (){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
           // let list = document.querySelector('#list');
           const id = document.querySelector('#ID').value;
           const sensor_name = data[id].name;
           const sensor_value = data[id].value;
           const sensor_unit = data[id].unit;
           document.querySelector('#result').innerHTML = `1 USD is equal to ${sensor_name} | ${sensor_value} | ${sensor_unit}.`;
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
    }
});