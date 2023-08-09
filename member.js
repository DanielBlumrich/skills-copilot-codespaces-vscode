function skillMembers()) {
  var members = ['Tom', 'Jerry', 'Donald', 'Daisy', 'Huey', 'Dewey', 'Louie'];
  var skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
  var skillMembers = [];
  for (var i = 0; i < members.length; i++) {
    var member = members[i];
    var skill = skills[i];
    skillMembers.push({ member: member, skill: skill });
  }
  return skillMembers;
}