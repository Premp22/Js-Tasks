let area=(s1,s2,s3)=>{
    let s = (s1 + s2 + s3)/2;
    var area =  Math.sqrt(s*((s-s1)*(s-s2)*(s-s3)));
    console.log("the area of triangle is:", area);
}

area(5,6,7);


