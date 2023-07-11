const skills = [
    {id: 125223, skill: 'Free Dogs', done: true},
    {id: 127904, skill: 'Forget Express', done: false},
    {id: 139608, skill: 'Sell Milk', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne,
  create, 
  deleteOne,
  update
  };
	
  function update(id, skill) {
    skills[id] = skill;
}

function deleteOne(id) {
  skills.splice(id, 1);
}

function create(skill) {
  skills.push(skill);
}

function getOne(id){
  return skills[id];
}

function getAll() {
  skills[id] = skill;
}
