# calendar

# Created by https://www.gitignore.io/api/reactnative
# Edit at https://www.gitignore.io/?templates=reactnative

### ReactNative ###
# React Native Stack Base

.expo
__generated__

### ReactNative.Xcode Stack ###
# Xcode
#
# gitignore contributors: remember to update Global/Xcode.gitignore, Objective-C.gitignore & Swift.gitignore

## User settings
xcuserdata/

## compatibility with Xcode 8 and earlier (ignoring not required starting Xcode 9)
*.xcscmblueprint
*.xccheckout

## compatibility with Xcode 3 and earlier (ignoring not required starting Xcode 4)
build/
DerivedData/
*.moved-aside
*.pbxuser
!default.pbxuser
*.mode1v3
!default.mode1v3
*.mode2v3
!default.mode2v3
*.perspectivev3
!default.perspectivev3

## Xcode Patch
*.xcodeproj/*
!*.xcodeproj/project.pbxproj
!*.xcodeproj/xcshareddata/
!*.xcworkspace/contents.xcworkspacedata
/*.gcno

### ReactNative.Node Stack ###
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage
*.lcov

# nyc test coverage
.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# TypeScript v1 declaration files
typings/

# TypeScript cache
*.tsbuildinfo

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env
.env.test

# parcel-bundler cache (https://parceljs.org/)
.cache

# next.js build output
.next

# nuxt.js build output
.nuxt

# react / gatsby 
public/

# vuepress build output
.vuepress/dist

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

### ReactNative.macOS Stack ###
# General
.DS_Store
.AppleDouble
.LSOverride

# Icon must end with two \r
Icon


# Thumbnails
._*

# Files that might appear in the root of a volume
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent

# Directories potentially created on remote AFP share
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk

### ReactNative.Linux Stack ###
*~

# temporary files which can be created if a process still has a handle open of a deleted file
.fuse_hidden*

# KDE directory preferences
.directory

# Linux trash folder which might appear on any partition or disk
.Trash-*

# .nfs files are created when an open file is removed but is still being accessed
.nfs*

### ReactNative.Android Stack ###
# Built application files
*.apk
*.ap_
*.aab

# Files for the ART/Dalvik VM
*.dex

# Java class files
*.class

# Generated files
bin/
gen/
out/
release/

# Gradle files
.gradle/

# Local configuration file (sdk path, etc)
local.properties

# Proguard folder generated by Eclipse
proguard/

# Log Files

# Android Studio Navigation editor temp files
.navigation/

# Android Studio captures folder
captures/

# IntelliJ
*.iml
.idea/workspace.xml
.idea/tasks.xml
.idea/gradle.xml
.idea/assetWizardSettings.xml
.idea/dictionaries
.idea/libraries
# Android Studio 3 in .gitignore file.
.idea/caches
.idea/modules.xml
# Comment next line if keeping position of elements in Navigation Editor is relevant for you
.idea/navEditor.xml

# Keystore files
# Uncomment the following lines if you do not want to check your keystore files in.
#*.jks
#*.keystore

# External native build folder generated in Android Studio 2.2 and later
.externalNativeBuild

# Google Services (e.g. APIs or Firebase)
# google-services.json

# Freeline
freeline.py
freeline/
freeline_project_description.json

# fastlane
fastlane/report.xml
fastlane/Preview.html
fastlane/screenshots
fastlane/test_output
fastlane/readme.md

# Version control
vcs.xml

# lint
lint/intermediates/
lint/generated/
lint/outputs/
lint/tmp/
# lint/reports/

### ReactNative.Gradle Stack ###
.gradle

# Ignore Gradle GUI config
gradle-app.setting

# Avoid ignoring Gradle wrapper jar file (.jar files are usually ignored)
!gradle-wrapper.jar

# Cache of project
.gradletasknamecache

# # Work around https://youtrack.jetbrains.com/issue/IDEA-116898
# gradle/wrapper/gradle-wrapper.properties

### ReactNative.Buck Stack ###
buck-out/
.buckconfig.local
.buckd/
.buckversion
.fakebuckversion

# End of https://www.gitignore.io/api/reactnative




# Created by https://www.gitignore.io/api/react
# Edit at https://www.gitignore.io/?templates=react

### react ###
.DS_*
*.log
logs
**/*.backup.*
**/*.back.*

node_modules
bower_componets

*.sublime*

psd
thumb
sketch

# End of https://www.gitignore.io/api/react
