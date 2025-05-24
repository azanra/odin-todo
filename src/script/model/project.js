export default function Project() {
  this.project = [];
}

Project.prototype.addProjectList = function (projectList) {
  this.project = [...this.project, projectList];
};
