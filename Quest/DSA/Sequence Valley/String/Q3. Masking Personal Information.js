/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function(s) {
    let result = "";

    if(s.includes('@')){ //meaning, s is an email
        let initialSplit = s.split('@');
        let name = initialSplit[0];
        let domain = initialSplit[1];

        result += `${name[0].toLowerCase()}*****${name[name.length - 1].toLowerCase()}@`;
        for(let i = 0; i < domain.length; i++){
            result += domain[i].toLowerCase();
        }
    }

    else{ //it's a phone number
        let numbers = [];

        for(let i = 0; i < s.length; i++){
            if(s[i] >= '0' && s[i] <= '9') numbers.push(s[i]);
        }

        let localNumber = numbers.slice(-4);
        let countryCode = numbers.slice(0, numbers.length - 10);
        
        let countryCodeLen = countryCode.length;
        if(countryCodeLen === 0) result = `***-***-${localNumber.join('')}`;
        else if(countryCodeLen === 1) result = `+*-***-***-${localNumber.join('')}`;
        else if(countryCodeLen === 2) result = `+**-***-***-${localNumber.join('')}`;
        else if(countryCodeLen === 3) result = `+***-***-***-${localNumber.join('')}`;
    }

    return result;
};