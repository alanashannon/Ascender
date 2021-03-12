<img width="200" src="https://github.com/alanashannon/Ascender/blob/main/app/assets/images/ascender_logo.png">

Ascender is a crowdfunding platform that allows users to create their own projects that need funding or help support others' projects. It is largely modeled off of Kickstarter, and uses React/Redux on the frontend and Rails/Postgresql on the backend.

[Link to Ascender](https://project-ascender.herokuapp.com/#/)

## Core Features
* Frontend/Backend User Authentication with BCrypt
* Ability to create, edit, and delete your own projects
* Back a project by choosing a reward, updated in real time
* Search for projects or categories via a search bar or Discover category dropdown
* Dropdown in header bar where users can view their own projects

Recommended Projects Toggle: 
<br />
<img src="https://github.com/alanashannon/Ascender/blob/main/app/assets/images/index_toggle.gif">

Search Feature: 
<br />
<img src="https://github.com/alanashannon/Ascender/blob/main/app/assets/images/search_function.gif">

Backing a Project: 
<br />
<img src="https://github.com/alanashannon/Ascender/blob/main/app/assets/images/backing_project.gif">

```
// Reward form submit in project_show.jsx
handleSubmit(e) {
    e.preventDefault(); 
    if (!this.props.currentUser) {
        this.props.history.push("/login")
    }

    const updates = {
        id: this.props.project.id, 
        amount_pledged: (this.props.project.amount_pledged + parseInt(this.state.backing_amount))
    }

    this.props.createBacking({
        "backer_id": this.props.currentUser, 
        "backing_amount": this.state.backing_amount, 
        "project_id": this.props.project.id
    })
    .then(() => this.props.updateProject(updates))

    window.scrollTo(0, 0)

    this.setState({
        backing_amount: ""
    });
};
```

### Challenges
The above code is for submitting the reward form to back a project, as demonstrated in the third gif. It was initially challenging to create a backing and have the data persist, and the solution was to simultaneously create the backing and update the project in two separate slices of state. The backing is created, taking in the amount that the user chooses to give, and that amount is then added to the project's amount_pledged through the updateProject action. The updateProject action was designed to only update the data it receives, so you need to pass in only the project id and the amount given to update the project's amount pledged. 


## Technologies Used

* React/Redux
* Ruby on Rails
* PostgreSQL
* jQuery/jBuilder
* BCrypt
* AWS S3
* Heroku
* Webpack
