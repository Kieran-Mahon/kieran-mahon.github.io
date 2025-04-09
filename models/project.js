class Project {
  constructor(name, type, skills, description, images, links, sizeMD, sizeOther) {
    this.name = name;
    this.type = type;
    this.skills = skills;
    this.description = description;
    this.images = images;
    this.links = links;
    this.sizeMD = sizeMD;
    this.sizeOther = sizeOther;
  }
}

module.exports = Project;