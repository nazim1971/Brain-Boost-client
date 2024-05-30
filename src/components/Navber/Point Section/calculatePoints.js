const calculatePoints = (objects) => {
    let totalPoints = 0;
  
    objects.forEach(obj => {
      const percentage = (obj.finalMark / obj.mark
    ) * 100;
  
      if (percentage === 100) {
        totalPoints += 5;
      } else if (percentage > 80) {
        totalPoints += 4;
      } else if (percentage > 50) {
        totalPoints += 2;
      }
    });
  
    return totalPoints;
  };

  export default calculatePoints;