async function generateDynamicComponent2(pro_logo, pro_id, client_name, website_model,domain, category, dev_logo, dev_name, pro_heading, pro_status, updated_on, progress, themes, websiteBtn) {
        
    var componentDiv = document.createElement('div');
    componentDiv.classList.add('component');

    const mainUpperDiv = document.createElement('div');
    mainUpperDiv.classList.add('main-upper');;

    var upperDiv = document.createElement('div');
    upperDiv.classList.add('upper');

    var imgDiv = document.createElement('div');
    imgDiv.classList.add('img');

    var imgElement = document.createElement('img');
    imgElement.setAttribute('src', pro_logo);
    imgDiv.appendChild(imgElement);

  const categoryDiv = document.createElement('div');
  categoryDiv.classList.add('category');

  var categoryHeading = document.createElement('div');
  categoryHeading.classList.add('category-heading');

    var h1 = document.createElement('h1');
    h1.textContent = category;

    categoryHeading.appendChild(h1);

    const clientIdButton = document.createElement('button');
    clientIdButton.classList.add('more-detail');
    clientIdButton.innerHTML = `<b>ID: ${pro_id}</b>`;

    categoryDiv.appendChild(categoryHeading);
    categoryDiv.appendChild(clientIdButton);

    // Append image and client name to upper section
    upperDiv.appendChild(imgDiv);
    upperDiv.appendChild(categoryDiv);

    // Append upper section to main container
    mainUpperDiv.appendChild(upperDiv);
    componentDiv.appendChild(mainUpperDiv);

    const clientNameH1 = document.createElement('h1');
    clientNameH1.classList.add('client-name');
    clientNameH1.textContent = client_name;
    
    // Append client name to main-upper
    mainUpperDiv.appendChild(clientNameH1);

    // Create lower section
    var lowerDiv = document.createElement('div');
    lowerDiv.classList.add('lower');

    // Create progress bar section
    var progressBarDiv = document.createElement('div');
    progressBarDiv.classList.add('progress-bar1');

    // Define progress ball and tick elements
    const progressBall = `<img style="position: absolute;z-index: 9999;width: 20px!important;" src="./assets/ball.png" alt="">
        <div class="sonar-wave sonar-wave1">
            <div class="sonar-wave sonar-wave2"></div>
            <div class="sonar-wave sonar-wave3"></div>
            <div class="sonar-wave sonar-wave4"></div>
        </div>`;
    const progressTick = `<img src="./assets/tick.png" alt="">`;

    // Create project status elements
    const h3 = document.createElement('h3');
    h3.textContent = 'Project Tracking';

    const section = document.createElement('section');
    section.classList.add('all-nodes');

    const divNodes = document.createElement('div');
    divNodes.classList.add('nodes');

    const divText = document.createElement('div');
    if (category == "Static Portfolio Website") {
        divText.classList.add('text-portfolio');
        const statuses = ['Client Added', 'Model Selection', 'Getting Data From Client', 'Updating Text & Media', 'Adding Pages','Approval', 'Completed', 'Extra'];
        statuses.forEach((status, index) => {
            const divNode = document.createElement('div');
            divNode.id = 'node' + (index + 1);
            divNode.classList.add('node');

            const p = document.createElement('p');
            p.textContent = status;

            if (index == 7) {
                divNode.style.display = 'none';
                p.style.display = 'none';
            }


            divNodes.appendChild(divNode);
            divText.appendChild(p);
        });
    } else if (category == "Static Website") {
        divText.classList.add('text-static');
        const statuses = ['Client Added', 'Model Selection', 'Getting Data From Client', 'Updating Text & Media', 'Adding Pages', 'Approval', 'Completed', 'Extra'];
        statuses.forEach((status, index) => {
            const divNode = document.createElement('div');
            divNode.id = 'node' + (index + 1);
            divNode.classList.add('node');

            const p = document.createElement('p');
            p.textContent = status;

            if (index == 7) {
                divNode.style.display = 'none';
                p.style.display = 'none';
            }

            divNodes.appendChild(divNode);
            divText.appendChild(p);
        });
    } else if (category == "Dynamic Website") {
        divText.classList.add('text-dynamic');
        const statuses = ['Client Added', 'Model Selection', 'Getting Data From Client', 'Uploading Text & Media', 'Adding Pages', 'Creating Admin Panel', 'Adding Dynamic Features', 'Approval', 'Completed', 'Extra'];
        statuses.forEach((status, index) => {
            const divNode = document.createElement('div');
            divNode.id = 'node' + (index + 1);
            divNode.classList.add('node');

            const p = document.createElement('p');
            p.textContent = status;

            if (index == 9) {
                divNode.style.display = 'none';
                p.style.display = 'none';
            }

            divNodes.appendChild(divNode);
            divText.appendChild(p);
        });
    } else if (category == "Semi Dynamic Website") {
        divText.classList.add('text-dynamic');
        const statuses = ['Client Added', 'Model Selection', 'Getting Data From Client', 'Uploading Text & Media', 'Adding Pages', 'Adding Dynamic Features', 'Approval', 'Completed', 'Extra'];
        statuses.forEach((status, index) => {
            const divNode = document.createElement('div');
            divNode.id = 'node' + (index + 1);
            divNode.classList.add('node');

            const p = document.createElement('p');
            p.textContent = status;

            if (index == 8) {
                divNode.style.display = 'none';
                p.style.display = 'none';
            }

            divNodes.appendChild(divNode);
            divText.appendChild(p);
        });
    }

    // Append nodes and text to the section
    section.appendChild(divNodes);
    section.appendChild(divText);

    // Append the section to the progressBarDiv
    progressBarDiv.appendChild(h3);
    progressBarDiv.appendChild(section);

    // Update progress status
    const nodes = divNodes.querySelectorAll('.node');
    if (progress >= 1 && progress <= nodes.length) {
        for (let i = 0; i < progress; i++) {
            nodes[i].innerHTML = (i === progress - 1) ? progressBall : progressTick;
            nodes[i].classList.add('current');
        }
    }
    
    // Append progress bar section to lower section
    lowerDiv.appendChild(progressBarDiv);

    // Create right work section
    var rightWorkDiv = document.createElement('div');
    rightWorkDiv.classList.add('right-work');

    var imgDiv2 = document.createElement('div');
    imgDiv2.classList.add('developer-img');

    // Create img element
    var imgElement2 = document.createElement('img');
    imgElement2.setAttribute('src', dev_logo);

    // Developer name element
    var nameElement = document.createElement('h2');
    nameElement.textContent = dev_name;

    var assignDev = document.createElement('p');
    assignDev.textContent = 'Assigned Developer';

    imgDiv2.appendChild(imgElement2);
    imgDiv2.appendChild(nameElement);
    imgDiv2.appendChild(assignDev);


    rightWorkDiv.appendChild(imgDiv2);

    // Notification message elements
    var msgDiv = document.createElement('div');
    msgDiv.classList.add('msg');

    var notificationTitle = document.createElement('h2');
    notificationTitle.textContent = pro_heading;
    msgDiv.appendChild(notificationTitle);

    var notificationContent = document.createElement('p');
    notificationContent.innerHTML = pro_status;
    msgDiv.appendChild(notificationContent);

    rightWorkDiv.appendChild(msgDiv);

    var lastUpdate = document.createElement('p');
    lastUpdate.classList.add('update');
    lastUpdate.innerHTML = `Last Updated on: ${updated_on}` ; 
    rightWorkDiv.appendChild(lastUpdate);
    
     const btnDiv = document.createElement('div');
     btnDiv.classList.add('btn');


    const websiteModel = document.createElement('button');
    websiteModel.classList.add('message-log');
    websiteModel.textContent = 'See Website Model';
    websiteModel.onclick = () => {
        window.open("https://" + website_model, "_blank");
    };

    const visitWebsiteButton = document.createElement('button');
    visitWebsiteButton.classList.add('visit-website');
    
    btnDiv.appendChild(websiteModel);
    btnDiv.appendChild(visitWebsiteButton);
    
    // Append button section to main container
    

    // function openMessageBox() {
    //     const overlay = document.createElement('div');
    //     const modal = document.createElement('div');
    //     const modalHeader = document.createElement('div');
    //     const iconBox = document.createElement('div');
    //     const closeButton = document.createElement('button');
    //     const modalBody = document.createElement('div');
    //     const heading = document.createElement('h4');
    //     const message = document.createElement('p');
    //     const actionButton = document.createElement('button');
        
    //     overlay.className = 'custom-overlay';
    //     modal.className = 'custom-modal';
    
    //     modalHeader.className = 'modal-header';
    //     iconBox.className = 'icon-box';
    //     iconBox.innerHTML = '<i class="fa fa-clock-o"></i>'; 
    
    //     closeButton.className = 'close';
    //     closeButton.innerHTML = '&times;';
    //     closeButton.onclick = () => closeMessageBox();
    
    //     modalHeader.appendChild(iconBox);
    //     modalHeader.appendChild(closeButton);
    
    //     modalBody.className = 'modal-body text-center';
        
    //     message.textContent = 'The themes are currently being uploaded. You will be notified when ready.';
    //     heading.textContent = 'Please Wait';
            
    //     actionButton.className = 'btn btn-success';
    //     actionButton.textContent = 'OK';
    //     actionButton.onclick = () => closeMessageBox();

    //     modalBody.appendChild(message);
    //     modalBody.appendChild(heading);
    //     modalBody.appendChild(actionButton);
    
    //     modal.appendChild(modalHeader);
    //     modal.appendChild(modalBody);
    
    //     overlay.appendChild(modal);
    //     document.body.appendChild(overlay);
    
    //     overlay.classList.add('show');
        
    //     function closeMessageBox() {
    //         overlay.classList.remove('show');
    //         setTimeout(() => document.body.removeChild(overlay), 300); 
    //     }
    // }
    
    
    
    

    if (progress >= 2 && nodes.length >= 2) {
        visitWebsiteButton.textContent = "Visit Website";
        visitWebsiteButton.onclick = () => {
            window.open("https://" + domain, "_blank");
        };
    }
        
    // } else {
    //     checkWebsiteButton.textContent = websiteBtn.text || "Select Theme";
    //     if (websiteBtn.state == 0) {
    //         checkWebsiteButton.onclick = () => {
    //             generatePopup('https://white-allthemes.vercel.app/1/');
    //             openMessageBox();
    //         };
    //     }
    //     else {
    //         let selectedThemeId;
    //         themes.forEach(theme => {
    //             if (theme.selected == 1) {
    //                 selectedThemeId = theme.themeId;
    //             }
    //         });
    //         checkWebsiteButton.onclick = () => {
    //             let url = "https://white-allthemes.vercel.app/" + selectedThemeId + "/";
    //             window.open(url, "_blank");
    //             console.log(selectedThemeId);
    //         };
    //     }
    // }



    lowerDiv.appendChild(rightWorkDiv);
    componentDiv.appendChild(lowerDiv);
    componentDiv.appendChild(btnDiv);

        

    async function generatePopup(initialThemeURL) {
        const outerSection = document.createElement('section');
        outerSection.classList.add('outer');
        outerSection.setAttribute('id', 'popupContainer');

        const allThemesDiv = document.createElement('div');
        allThemesDiv.classList.add('all-themes');

        const crossIconDiv = document.createElement('div');
        crossIconDiv.classList.add('cross-icon');
        crossIconDiv.innerHTML = '<i class="fa fa-times" id="closePopup" aria-hidden="true"></i>';
        allThemesDiv.appendChild(crossIconDiv);
        crossIconDiv.onclick = () => {
            document.body.removeChild(containerDiv);
        }

        let themesData = [];

        for (let i = 1; i <= themes.length; i++) {
            let dataCall = await fetch('https://vacomputers-com-themes-api.vercel.app/getTheme/' + i);
            let data = await dataCall.json();
            themesData.push(data.data);
        }

        console.log(themesData);

        let currentTheme = 0;

        for (let i = 0; i < themesData.length; i++) {
            const themeData = themesData[i];
            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('fixed-buttons');
            buttonContainer.setAttribute('id', 'buttonContainer');


            const button1 = document.createElement('button');
            button1.textContent = 'Model 1';
            button1.addEventListener('click', () => {
                openThemeInPopup('https://white-allthemes.vercel.app/1/');
                currentTheme = 0;
            });

            const button2 = document.createElement('button');
            button2.textContent = 'Model 2';
            button2.addEventListener('click', () => {
                openThemeInPopup('https://white-allthemes.vercel.app/2/');
                currentTheme = 1;
            });

            const button3 = document.createElement('button');
            button3.textContent = 'Model 3';
            button3.addEventListener('click', () => {
                openThemeInPopup('https://white-allthemes.vercel.app/5/');
                currentTheme = 2;
            });

            
            buttonContainer.appendChild(button1);
            buttonContainer.appendChild(button2);
            buttonContainer.appendChild(button3);

            const selectBtn = document.createElement('button');
            selectBtn.setAttribute('id', 'selectModel');
            selectBtn.textContent = 'Select This Model';
            selectBtn.addEventListener('click', () => {
                const model = document.createElement('div');
                model.classList.add('modal');
                model.setAttribute('id', 'modal');

                const para = document.createElement('p');
                para.textContent = 'Are you sure you want to select this model?';

                let yesBtn = document.createElement('button');
                yesBtn.setAttribute('id', 'yesButton');
                yesBtn.textContent = 'Yes';
                yesBtn.onclick = async () => {
                    const uniquePassword = '5689'; 
                    const userPassword = prompt('Please enter the password to approve:');
                    if (userPassword === uniquePassword) {
                        try {
                            themes[currentTheme].selected = 1;
                            const updatedTheme = await fetch('https://vacomputers-com-client-api.vercel.app/updateTheme/'+ pro_id, {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ themes })
                            });

                            await fetch('https://vacomputers-com-client-api.vercel.app/updateBtnState/' + pro_id, {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            });

                          await  fetch('https://vacomputers-com-client-api.vercel.app/updateProject', {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    pro_id: '00016', 
                                    progress: '3', 
                                    pro_status:'The Theme Has Been Chosen. The Agreement Has Been Sent To The Client And Will Proceed Once Signed.'
                                })
                            });

                            await fetch('https://vacomputers-email-api.vercel.app/update', {
                                method: "POST",
                                mode: "cors",
                                cache: "no-cache",
                                credentials: "same-origin",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                redirect: "follow",
                                referrerPolicy: "no-referrer",
                                body: JSON.stringify({
                                    mail: 'ezing.edu@gmail.com,singhsandeep178@gmail.com',
                                    msg: 'The Theme Has Been Chosen. The Agreement Has Been Sent To The Client And Will Proceed Once Signed.',
                                    pro_heading: 'Theme Selected'
                                }),
                            });

                            console.log(currentTheme);
                            setTimeout(() => {
                                window.location.reload();
                            }, 500);

                            
                        } catch (error) {
                            console.error(error);
                        }
                    } else {
                        alert('Wrong password! Please enter the correct password.');
                    }
                };

                let noBtn = document.createElement('button');
                noBtn.setAttribute('id', 'noButton');
                noBtn.textContent = 'No';
                noBtn
                    .addEventListener('click', () => {
                        model.remove();
                    });

                model.appendChild(para);
                model.appendChild(yesBtn);
                model.appendChild(noBtn);

                document.body.appendChild(model);
            });

            buttonContainer.appendChild(selectBtn);

            if (i < 1) {
                const themeDiv = document.createElement('iframe');
                themeDiv.setAttribute('frameborder', '0');
                themeDiv.setAttribute('width', '100%');
                themeDiv.setAttribute('height', '100%');
                themeDiv.setAttribute('src', initialThemeURL);
                allThemesDiv.appendChild(themeDiv);

                openThemeInPopup = (themeURL) => {
                    themeDiv.setAttribute('src', themeURL);
                };
            }

            allThemesDiv.appendChild(buttonContainer);

        };

        outerSection.appendChild(allThemesDiv);

        const containerDiv = document.createElement('div');
        containerDiv.appendChild(outerSection);

        document.body.appendChild(containerDiv);
    }
        
    // projectContainer.appendChild(componentDiv);
    if (progress > 0 && progress < 7) {
        document.querySelector('#main-container').appendChild(componentDiv);
    } else if (pro_heading.includes("Website Updated")) {
        document.querySelector('#second-container').appendChild(componentDiv);
    } else if (progress >= 7) {
        document.querySelector('#third-container').appendChild(componentDiv);
    }

};

// async function dataCall() {
//     try {
//         let res = await fetch("https://vacomputers-com-client-api.vercel.app/getProjects");
//         let data = await res.json();

//         console.log("Fetched Data:", data);

//         data.sort((a, b) => new Date(b.updated_on) - new Date(a.updated_on));

//         const ongoingProjects = [];
//         const completedProjects = [];
//         const contentUpdatedProjects = [];

//         data.forEach(client => {
//             let { pro_logo, pro_id, client_name, website_model, domain, category, dev_logo, dev_name, pro_heading, pro_status, updated_on, progress, themes, websiteBtn } = client;

//             if (progress >= 6) { 
//                 completedProjects.push(client);
//             } else if (progress >= 2) { 
//                 ongoingProjects.push(client);
//             } else { 
//                 contentUpdatedProjects.push(client);
//             }
//         });

//         console.log("Ongoing Projects:", ongoingProjects);
//         console.log("Completed Projects:", completedProjects);
//         console.log("Content Updated Projects:", contentUpdatedProjects);

//         createSection('Ongoing projects', 'ongoing-projects', ongoingProjects);
//         createSection('Completed Projects', 'completed-projects', completedProjects);
//         createSection('Content Updated Projects', 'content-updated-projects', contentUpdatedProjects);

//     } catch (error) {
//         console.log("Error fetching or processing data:", error);
//     }
// }

// function createSection(heading, sectionId, projectsArray) {
//     try {
//         if (!sectionId || typeof sectionId !== 'string') {
//             throw new Error(`Invalid section ID: ${sectionId}`);
//         }

//         if (projectsArray.length === 0) {
//             console.log(`No projects found for ${heading}`);
//             return;
//         }

//         const sectionDiv = document.createElement('div');
//         sectionDiv.id = sectionId;

//         const headingElement = document.createElement('h2');
//         headingElement.classList.add('all-projects')
//         headingElement.textContent = heading;
//         sectionDiv.appendChild(headingElement);

//         document.querySelector("#main-container").appendChild(sectionDiv);
//         console.log(`Created section ${sectionId} for ${heading}`);

//         projectsArray.forEach(client => {
//             let { pro_logo, pro_id, client_name, website_model, domain, category, dev_logo, dev_name, pro_heading, pro_status, updated_on, progress, themes, websiteBtn } = client;

//             generateDynamicComponent2(pro_logo, pro_id, client_name, website_model, domain, category, dev_logo, dev_name, pro_heading, pro_status, updated_on, progress, themes, websiteBtn, sectionId);
//         });
//     } catch (error) {
//         console.error(`Error in createSection: ${error.message}`);
//     }
// }

// dataCall();

function parseCustomDateString(dateStr) {
    let [timePart, datePart] = dateStr.split(" | ");
    
    let [time, period] = timePart.split(" ");
    let [hour, minute] = time.split(":");
    
    if (period === "PM" && hour !== "12") {
        hour = parseInt(hour) + 12;
    } else if (period === "AM" && hour === "12") {
        hour = "00";
    }
    
    let [day, month, year] = datePart.split("/");
    let formattedDate = `${year}-${month}-${day}T${hour}:${minute}:00`;

    return new Date(formattedDate);
}

async function dataCall() {
    try {
        let res = await fetch("https://vacomputers-com-client-api.vercel.app/getProjects");
        let data = await res.json();
        console.log(data);

        // Sort data by latest 'updated_on'
        data.sort((a, b) => parseCustomDateString(b.updated_on) - parseCustomDateString(a.updated_on));

        // Arrays for each category
        let ongoingProjects = [];
        let contentUpdate = [];
        let completedProjects = [];

        // Filter data into categories
        data.forEach(client => {
            let { pro_logo, pro_id, client_name, website_model, domain, category, dev_logo, dev_name, pro_heading, pro_status, updated_on, progress, themes, websiteBtn } = client;

            // Categorize projects based on progress
            if (pro_heading.includes("Hello SLN College")) {
                contentUpdate.push(client);
            } else if (progress >= 7) {
                completedProjects.push(client);
            } else if (progress > 0 && progress < 9) {
                ongoingProjects.push(client);
            } else {
                // Handle projects that don't meet any previous conditions if needed
            }
        });

// Clear previous content
document.querySelector("#main-container").innerHTML = '';
document.querySelector("#second-container").innerHTML = '';
document.querySelector("#third-container").innerHTML = '';


// Display each category with its projects
displayProjectsWithHeading('Ongoing Projects', ongoingProjects);
displayProjectsWithHeading('Content Update', contentUpdate);
displayProjectsWithHeading('Completed Projects', completedProjects);

} catch (error) {
console.log("Error fetching or processing data:", error);
}
};

// Function to display projects with headings
function displayProjectsWithHeading(heading, projects) {
    console.log(`\n${heading}:\n`);

    const headingElement = document.createElement('h2');
    headingElement.classList.add('heading');
    headingElement.textContent = heading;

    
    // Generate a unique ID for each heading based on its name
    const headingId = heading.toLowerCase().replace(/\s+/g, '-') + '-heading';
    headingElement.id = headingId; // Assign unique ID to the heading

    // Determine which container to append to based on heading
    let container;

    if (heading === 'Ongoing Projects') {
        container = document.querySelector('#main-container');
    } else if (heading === 'Content Update') {
        container = document.querySelector('#second-container');
    } else if (heading === 'Completed Projects') {
        container = document.querySelector('#third-container');
    }

    // Append heading to the appropriate container
    container.appendChild(headingElement);

// Check if projects exist for this heading
if (projects.length === 0) {
const noProjectsMessage = document.createElement('p');
noProjectsMessage.textContent = `No ${heading.toLowerCase()} available.`;
container.appendChild(noProjectsMessage);
return;
}

// Append projects under the heading
projects.forEach(client => {
let { pro_logo, pro_id, client_name, website_model, domain, category, dev_logo, dev_name, pro_heading, pro_status, updated_on, progress, themes, websiteBtn } = client;

// Generate the dynamic component for each project
generateDynamicComponent2(pro_logo, pro_id, client_name, website_model, domain, category, dev_logo, dev_name, pro_heading, pro_status, updated_on, progress, themes, websiteBtn);
console.log(`${client_name} | Updated on: ${updated_on}`);
});
}

// Call the data fetching function
dataCall();


// async function dataCall() {
//     try {
//         let res = await fetch("https://vacomputers-com-client-api.vercel.app/getProjects");
//         let data = await res.json();
//         console.log(data);

//         const ongoingComponents = [];
//         const completedComponents = [];

//           data.sort((a, b) => b.updated_on - a.updated_on);

//         data.forEach(client => {
//             let { pro_logo, pro_id, client_name, domain, category, dev_logo, dev_name, pro_heading, pro_status, updated_on, progress, themes, websiteBtn } = client;
//             if (progress < 2) {
//                 ongoingComponents.push(client);
//             } else {
//                 completedComponents.push(client);
//             }
//         });

//         ongoingComponents.forEach(client => {
//             let { pro_logo, pro_id, client_name, website_model,domain, category, dev_logo, dev_name, pro_heading, pro_status, updated_on, progress, themes, websiteBtn } = client;
//             generateDynamicComponent2(pro_logo, pro_id, client_name, website_model,domain, category, dev_logo, dev_name, pro_heading, pro_status, updated_on, progress, themes, websiteBtn);
//         });

//         completedComponents.forEach(client => {
//             let { pro_logo, pro_id, client_name, website_model, domain, category, dev_logo, dev_name, pro_heading, pro_status, updated_on, progress, themes, websiteBtn } = client;
//             generateDynamicComponent2(pro_logo, pro_id, client_name, website_model, domain, category, dev_logo, dev_name, pro_heading, pro_status, updated_on, progress, themes, websiteBtn);
//         });

//     } catch (error) {
//         console.error(error);
//     }
// }

// dataCall();



let websiteBtn = {
    text: 'Select Theme', state: "0"
};