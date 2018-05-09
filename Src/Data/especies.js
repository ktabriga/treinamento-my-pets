const especies = [{
  id: 1,
  name: 'Cachorro',
  avatar: require('../Images/Avatar_Dog-256.png')
}, {
  id: 2,
  name: 'Gato',
  avatar: require('../Images/Avatar_Cat-256.png')
}, {
  id: 3,
  name: 'Alien',
  avatar: require('../Images/Avatar_Alien-128.png')
}]
export default especies

export const findEspecie = (especieId) => {
  const filtered = especies.filter(e => e.id === especieId)
  return filtered[0]
}
