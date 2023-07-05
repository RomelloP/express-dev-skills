const skills = [
    {id: 125223, skill: 'Free Dogs', done: true},
    {id: 127904, skill: 'Forget Express', done: false},
    {id: 139608, skill: 'Sell Milk', done: false}
  ];
	
  module.exports = {
    getAll
  };
	
  function getAll() {
    return skills;
  }