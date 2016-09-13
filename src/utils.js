let getQueryString = (obj) => {
	if(obj){
    let oStr = JSON.stringify(obj),
        strFil = oStr.replace(/(^{)|(}$)/g,''),
        paramArr = strFil.split(','),
        tempParam = [];
    paramArr.forEach((param,idx) => {
      let eachArr = param.split(':'),
          key = eachArr[0],
          value = eachArr[1],
          every = key + '=' + value;
      tempParam.push(every);
    });
    return tempParam.join('&');
  }else{
    return '';
  }
}

export { getQueryString }
