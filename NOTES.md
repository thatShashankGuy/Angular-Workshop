## What are modules used for
    Module in Angular refers to a place where you can group the components, directives, pipes, and services, which are related to the application. In case you are developing a website, the header, footer, left, center and the right section become part of a module.


## What Angular Decorators Do
    The whole purpose of Angular decorators is to store metadata about a class, method, or property. When you configure a component, you are providing a metadata for that class that tells Angular that you have a component, and that component has a specific configuration. Each decorator has a base configuration with some default values. When the decorator is created using the relevant factory, the default configuration is passed.

    There are four types of decorators in Angular:

# Class Decorators (@component) -->
    Class Decorators are the top-level decorators that are used to define the purpose for the classes. They provide information to Angular that a particular class is a component, or module

# Property Decorators (@Output/@Input)-->
    Property decorators are used to decorate the specific properties within the classes.Without decorators, you would have to define this property in your class for TypeScript to know about it, and then somewhere else tell Angular that you've got a property that you want to be an input.

# Method Decorators   (@hostlistener) --> 
    A Method Decorator decorates specific methods within your class with functionality. This is declared just before a method declaration.

# Parameter Decorators (@Inject) --> 
    Parameter decorators are used to decorate parameters in your class constructors.t tells Angular that what you want that parameter to be initiated with.


## Data binding 
    Source to Target/View ->  [] 
    Target/View to Source -> ()
    Two Way Data binding -> [()] [(value)]

## What is event Binding ?
    In Angular  event binding is used to handle the events raised by the user actions like button click, mouse movement, keystrokes, etc. When the DOM event happens at an element(e.g. click, keydown, keyup), it calls the specified method in the particular component. 

    Using Event Binding we can bind data from DOM to the component and hence can use that data for further purposes.

## Property Binding 
    Property binding is a one-way mechanism that lets you set the property of a view element. It involves updating the value of a property in the component and binding it to an element in the view template. Property binding uses the [] syntax for data binding

# Two Way data binding 
    Angular's two-way binding syntax is a combination of square brackets and parentheses, [()]. The [()] syntax combines the brackets of property binding, [], with the parentheses of event binding, (), as follows.

    Two way databinding can also b achieved via ngModel 
    but for using that you need to import form module and 
    need to be aware of few gotchas including name attribute if working with form and it might be affecting more then one field at a time . 
 
 ## Lifecycle hooks 

<ngOnChanges> − When the value of a data bound property changes, then this method is called.

<ngOnInit> − This is called whenever the initialization of the directive/component after Angular first displays the data-bound properties happens.

<ngDoCheck> − This is for the detection and to act on changes that Angular can't or won't detect on its own.

<ngAfterContentInit> − This is called in response after Angular projects external content into the component's view.

<ngAfterContentChecked> − This is called in response after Angular checks the content projected into the component.

<ngAfterViewInit >− This is called in response after Angular initializes the component's views and child views.

<ngAfterViewChecked> − This is called in response after Angular checks the component's views and child views.

<ngOnDestroy> − This is the cleanup phase just before Angular destroys the directive/component.


# To pass data from child to parent component in React:
 common pattern in Angular is sharing data between a parent component and one or more child components. Implement this pattern with the @Input() and @Output() decorators.