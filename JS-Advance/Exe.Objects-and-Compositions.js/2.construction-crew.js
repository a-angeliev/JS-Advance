let worker = { weight: 120,
  experience: 20,
  levelOfHydrated: 200,
  dizziness: true }

  
function modify(worker){
    if(worker.dizziness){
        worker.levelOfHydrated += worker.weight * worker.experience / 10;
        worker.dizziness = false;
        return worker;
    }else{
        return worker;
    }
}

console.log(modify(worker));