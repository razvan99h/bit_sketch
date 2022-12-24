export class SidebarElement {
  private action: () => void;
  private baseImgPath = '/sidebar-elements/'
  private defaultAction = () => {
    console.log(this.name + ' clicked!');
  }

  constructor(
    private name: string,
    action?: () => void) {
   this.action = action ?? this.defaultAction;
  }

  getName(): string {
    return this.name;
  }

  getImagePath(): string {
    const fileName = this.name.toLowerCase().replace(' ', '-');
    return this.baseImgPath + fileName + '.svg';
  }

  onClick() {
    this.action();
  }
}

export const getSidebarElements = () => {
  return [
    new SidebarElement('Dashboard'),
    new SidebarElement('Incidents'),
    new SidebarElement('Network'),
    new SidebarElement('Risk Management'),
    new SidebarElement('Policies'),
    new SidebarElement('Reports'),
    new SidebarElement('Quarantine'),
    new SidebarElement('Companies'),
    new SidebarElement('Accounts'),
    new SidebarElement('Sandbox Analyzer'),
    new SidebarElement('Email Security'),
    new SidebarElement('Configuration'),
  ];
}
