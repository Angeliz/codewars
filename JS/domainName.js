// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"
function domainName(url){
  //your code here
  var str=url;
  str=str.replace(/https:\/\//,"");
  str=str.replace(/http:\/\//,"");
  str=str.replace(/www./,"");
  var num=str.indexOf(".");
  return str.slice(0,num);
}

//别人的代码
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

function domainName(url) {

  url = url.toString().replace('https://', '').replace('http://', '').replace('www.', '');

  return url.split('.')[0];
}