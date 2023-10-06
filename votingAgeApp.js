function checkVotingEligibility(age) {
    if (age >= 18) {
        return "You are eligible to vote!";
    } else { return "Sorry, you are not eligible to vote yet.";
        }
    
     }
     console.log(checkVotingEligibility(18));  
      console.log(checkVotingEligibility(16));
      console.log(checkVotingEligibility(20));
