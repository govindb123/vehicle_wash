pipeline {
  agent any

  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Test') {
      steps {
        echo 'No tests configured'
      }
    }

    stage('Deploy') {
      steps {
        echo 'UI deployed successfully (simulation)'
      }
    }
  }
}
