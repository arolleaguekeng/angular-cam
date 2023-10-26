import { AngularCleanArchitecture } from "./architectures/angCleanArchtitecture";

//jsplaner
const { execSync } = require('child_process');
const blessed = require('blessed');
const { program } = blessed;
const { Select, Input, Prompt, Confirm } = require('enquirer');

const Enquirer = require('enquirer');
const enquirer = new Enquirer();

function app() {
    console.log('================================================================');
    console.log('********** TypeScript Angular Clean Architecture ***************');
    console.log('================================================================');
    let projectName = 'my-project';
    let routingFlag = "--routing";

    async function askparrametters() {
        console.log('================================================================');
        let projectNamePrompt = await enquirer.prompt({
            type: 'input',
            name: 'projectName',
            message: 'Enter project name: '
        });
        projectName = projectNamePrompt['projectName'];

        let routingFlag = await enquirer.prompt({
            type: 'input',
            name: 'routingFlag',
            message: 'Do you want to add routing? (y/n) '
        })
        if (routingFlag["routingFlag"] === 'y') {
            routingFlag = "--routing";
        }

        const command = `ng new ${projectName} ${routingFlag} --style=scss --skip-tests=true --skip-install=true`;
        console.log(command);
        execSync(command, { stdio: 'inherit' });
        chooseArchitectureTemplate();
    }



    async function chooseArchitectureTemplate() {

        const prompt = await new Select({
            message: 'Select Architecture:',
            choices: [
                "Angular Clean Architecture (Angular CA)",
                "Angular Enterprise Architecture",
                "Angular Feature Modules",
                "Angular Monorepo Architecture",
                "Angular Service-Oriented Architecture (SOA)",
                "Angular Micro Frontends",
                "Angular Serverless Architecture"
            ],
        });

        const style = await prompt.run();

        console.log(`Vous avez choisi le style: ${style}`);
        let styleString = style.toString();
        console.log(styleString);
        switch (styleString) {
            case "Angular Clean Architecture (Angular CA":
                console.log('Angular Clean Architecture (Angular CA)');
                createAngClArch();
            case "Angular Enterprise Architecture":
                createAngEntArch();
            case "Angular Feature Modules":
                createAngFeatArch();
            case "Angular Monorepo Architecture":
                createAngMonArch();
            case "Angular Service-Oriented Architecture (SOA)":
                createAngSOAArch();
            case "Angular Micro Frontends ":
                createAngMicroArch();
            case "Angular Serverless Architecture":
                createAngServArch();
            default:
                createAngClArch();
                break;
        }

    }

    function createAngEntArch() {

    }
    function createAngFeatArch() {

    }
    function createAngMonArch() {

    }
    function createAngSOAArch() {

    }
    function createAngMicroArch() {

    }
    function createAngServArch() {

    }

    function createAngClArch() {
        new AngularCleanArchitecture(projectName).createAngularCleanArchitecture();
    }
    askparrametters();
}
app();

module.exports = app;
