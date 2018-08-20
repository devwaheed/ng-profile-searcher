pipeline {
  agent {
    node {
      label 'node7'
    }

  }
  stages {
    stage('build') {
      steps {
        sh 'ng build --prod'
      }
    }
  }
}