const name=["ram","shyam","mohan","hari","gita","rita"];
name[4]="sita";
for(i=0;i<name.length;i++){
}
name.reverse();
console.log(name);
console.log(name.length);
console.log(name.sort());
console.log(name.toString());
console.log(name.join(" "));
console.log(name.includes("ram"));
console.log(name.indexOf("ram"));
console.log(name.lastIndexOf("ram"));
console.log(name.slice(1,3));//[ 'shyam', 'mohan' ]
