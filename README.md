# PassLock
password manager using react native and firebase

## Current status
for now, you can say this is the dumbest possible way to make a password manager,
it simply saves your password in plain text in firebase, also currently any authenticated user have permission to access all passwords in the databse, so there is no privilages or any other sort of security between users.

## TO DOs
1. encrypt passwords and find somewhere to save the encryption key other than the database itself, otherwise, it's useless.
2. find a way to seperate between passwords for each user.
