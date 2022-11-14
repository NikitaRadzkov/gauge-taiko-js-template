pipeline {
   agent { dockerfile true }
   stages {
      stage('Clear test reports'){
         steps {
            sh(""" rm -rf "reports" """)
         }
      }
      stage('e2e-tests'){
         parallel {
            stage('chromium') {
               steps {
                  sh 'npm run test'
               }
               post {
                  always {
                     sh 'tar -czvf gauge-taiko-report-chromium.tar.gz html-report'
                     archiveArtifacts 'gauge-taiko-report-chromium.tar.gz'
                     emailext attachmentsPattern: '**/gauge-taiko-report-chromium.tar.gz', body: '$DEFAULT_CONTENT', recipientProviders: [requestor()], subject: "Chromium tests", to: "email@example.com"
                  }
               }
            }
         }
      }
   }
}