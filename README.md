# React.js Blank

Maven archetype to create a react.js maven project

## How to use

with Bash

    mvn archetype:generate\
     -DarchetypeGroupId=am.ik.archetype\
     -DarchetypeArtifactId=maven-reactjs-blank-archetype\
     -DarchetypeVersion=1.0.0

with CommandPrompt (Windows)

    mvn archetype:generate^
     -DarchetypeGroupId=am.ik.archetype^
     -DarchetypeArtifactId=maven-reactjs-blank-archetype^
     -DarchetypeVersion=1.0.0

### Example

This blank project requires `npm` and `gulp`.

You need the following instruction:

    $ npm install -g gulp

#### Create a project


    $ mvn archetype:generate -B\
     -DarchetypeGroupId=am.ik.archetype\
     -DarchetypeArtifactId=maven-reactjs-blank-archetype\
     -DarchetypeVersion=1.0.0\
     -DgroupId=demo\
     -DartifactId=hello-react\
     -Dversion=1.0.0-SNAPSHOT

#### Initialize the project

    $ npm install

#### Build the application

    $ gulp build

or

    $ gulp watch

open dest/index.html

#### Build jar

    $ mvn clean package

The output of `gulp` are copied to `target/classes/META-INF/resources/`.
So this jar can be used as [WebJars](http://www.webjars.org/documentation).

## License

Licensed under the Apache License, Version 2.0.
