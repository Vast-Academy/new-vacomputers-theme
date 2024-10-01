function createSidebar() {
    // Customize content based on the current page
    let customMenu = '';
  
    if (window.location.pathname.includes('contact-us/')) {
      customMenu = `
        <li class="menu-item">
          <i class="fas fa-info-circle"></i> About Us
        </li>
      `;
      subMenu = `
      <li class="menu-item active">
            <i class="fas fa-briefcase"></i> On-Going
        </li>
        <li class="menu-item">
            <i class="fas fa-sync-alt"></i> Content Update
        </li>
        <li class="menu-item">
            <i class="fas fa-check-circle"></i> Completed
        </li>
      `;
    } else if (window.location.pathname.includes('page-services.html')) {
      customMenu = `
        <li class="menu-item">
          <i class="fas fa-hands-helping"></i> Our Services
        </li>
      `;
      subMenu = `
      <li class="menu-item">
          <i class="fas fa-hands-helping"></i> web Develop
        </li>
        <li class="menu-item">
          <i class="fas fa-hands-helping"></i> Software
        </li>
        <li class="menu-item">
          <i class="fas fa-hands-helping"></i> Digital
        </li>
      `;
    }
    
    const sidebarContent = `
     <div class="sidebar">
    <ul class="menu">
      <li class="menu-item active">
        <i class="fas fa-home"></i> Home
      </li>
      <li class="menu-item">
        <i class="fas fa-tasks"></i> Projects
      </li>
      ${customMenu}
      <li class="menu-item">
        <i class="fas fa-file-invoice-dollar"></i>&nbsp; Plans
      </li>
    </ul>

    <!-- Thin line after Plans -->
    <hr class="separator">

    <div class="sub-menu">
      <h3>Projects</h3>
      <ul class="menu">
      ${subMenu}
      </ul>
    </div>

    <!-- Thin line after Plans -->
    <hr class="separator">

    <div class="sub-menu">
      <h3>Others</h3>
      <ul class="menu">
        <li class="menu-item">
            <i class="fas fa-bullhorn"></i> Today's Offers
        </li>
        <li class="menu-item">
            <i class="fas fa-headset"></i> Contact Us
        </li>
      </ul>
    </div>
  </div>
    `

    // Insert sidebar content into the element with id "sidebar-container"
  document.getElementById('sidebar-container').innerHTML = sidebarContent;
}

// Call the function to generate the sidebar when the window loads
window.onload = createSidebar;