plugins {
    kotlin("jvm") version "1.9.25"
    kotlin("plugin.spring") version "1.9.25"
    kotlin("plugin.jpa") version "1.9.25"  // TODO: 꼭 필요한 지 확인
    id("org.springframework.boot") version "3.4.4"
    id("io.spring.dependency-management") version "1.1.7"
}

group = "com.gyugyufelt"
version = "0.0.1-SNAPSHOT"

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(21)
    }
}

repositories {
    mavenCentral()
}

dependencies {

    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    implementation("org.springframework.boot:spring-boot-starter-validation")
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    developmentOnly("org.springframework.boot:spring-boot-devtools") // 핫 리로드
    runtimeOnly("com.h2database:h2")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testImplementation("org.jetbrains.kotlin:kotlin-test-junit5")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")

    /* 이미지 업로드용 */
    implementation("commons-io:commons-io:2.11.0") // 파일 핸들링
    implementation("org.apache.tika:tika-core:2.9.0") // 파일 타입 확인 등

    /* DB */
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    // implementation("org.mariadb.jdbc:mariadb-java-client:3.1.4") // 최신 드라이버
    runtimeOnly("org.postgresql:postgresql:42.7.2")

    /* Swagger */
    implementation("org.springdoc:springdoc-openapi-starter-webmvc-ui:2.8.6")

    /* , Oauth, JWT, Mockito, Security, Webflux */


}

kotlin {
    compilerOptions {
        freeCompilerArgs.addAll("-Xjsr305=strict")
    }
}

tasks.withType<Test> {
    useJUnitPlatform()
}
