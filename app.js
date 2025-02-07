function canAccessWebsite(age) {
  if (age < 18) {
    return false;
  }
  return true; //else {
               //   return true;
               // }
}
console.log(canAccessWebsite(16));

const canAccessWebsite2 = age => age < 18 ? false : true;
console.log(canAccessWebsite2(18));

const canAccessWebsite3 = age => age < 18 ? 'No' : 'Yes';
console.log(canAccessWebsite3(19));