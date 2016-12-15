'use strict';

describe('contactsApp.services.contactsProvider module', function() {
    beforeEach(function(){
        module('contactsApp');
    });

    var $httpProvider, storageProvider, sampleData, sampleUser, $q;

    var httpData = '[{"id": 1,"name": "http"}]';

    $httpProvider = function(rspMock){
        this.get = function(url){
            return $q.resolve({data: rspMock})
        }
    };

    sampleData = [
        {
            "id": 0,
            "name": "leanne graham",
            "email": "leanne@gmail.com",
            "job": "web developer",
            "location": "london",
            "tag": "friends",
            "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
        }
    ];

    sampleUser = {
        "name": "ervin howell",
        "email": "ervin@gmail.com",
        "job": "tech lead",
        "location": "london",
        "tag": "friends",
        "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
    };

    beforeEach(inject(function( _storageProvider_,  _$q_){
        storageProvider = _storageProvider_;
        // clear storage to ensure clean test data
        storageProvider.clear('contacts');
        $q = _$q_;
    }));

    describe('http service online', function() {
        var $http = new $httpProvider(httpData);
        it('should return http data', inject(function(contactsProvider) {
            contactsProvider.getContacts().then(function(contacts){
                expect(contacts[0].name).toEqual('http');
            });
        }));
    });

    describe('http service offline', function() {
        var $http = function(){
            this.get = function(url){
                return $q.reject('ERROR')
            }
        };
        it('should return sample data', inject(function(contactsProvider) {
            contactsProvider.getContacts().then(function(contacts){
                expect(contacts[0].name).toEqual('leanne graham');
            });
        }));
    });

    describe('saving user', function() {
        var $http = function(){
            this.get = function(url){
                return $q.reject('ERROR')
            }
        };
        it('should save then load contact data', inject(function(contactsProvider) {
            contactsProvider.storeContact(sampleUser).then(function(){
                contactsProvider.getContact(1).then(function(contact){
                    expect(contact.id).toEqual(1);
                    expect(contact.name).toEqual('ervin howell');
                    expect(contact.email).toEqual('ervin@gmail.com');
                    expect(contact.job).toEqual('tech lead');
                    expect(contact.location).toEqual('london');
                    expect(contact.tag).toEqual('friends');
                    expect(contact.avatar).toEqual('http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png');
                });
            });
        }));
    });
});