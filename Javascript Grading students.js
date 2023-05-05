let newArray = [];
  for (let i = 0; i< grades.length; i++){
    if(grades[i]<38 || grades[i]%5<3){
      newArray.push(grades[i]);
    } else {
      if(grades[i]%5===3) newArray.push(grades[i]+2)
      else newArray.push(grades[i]+1)
    }
  }
  return newArray;
