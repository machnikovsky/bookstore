FROM adoptopenjdk/openjdk11:jre-11.0.4_11
EXPOSE 8080
ADD /build/libs/bs-backend-0.0.1-SNAPSHOT.jar bs-backend-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=docker",  "bs-backend-0.0.1-SNAPSHOT.jar"]
