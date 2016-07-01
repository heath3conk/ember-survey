import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin);
// the above (from line 2) came from http://ember-simple-auth.com/
// the mixin is supposed to handle all authentication events; see docs for details

// export default Ember.Route.extend({
//   actions: {
//        login: function() {
//          var controller = this.get('controller');
//          var email = controller.get('userEmail');
//          var password = controller.get('userPassword');
//            this.get('session').authenticate('authenticator:firebase', {
//                'email': email,
//                'password': password
//            }).then(function() {
//                this.transitionTo('protected');
//            }.bind(this));
//        },
//        logout: function() {
//            this.get('session').invalidate().then(function() {
//                this.transitionTo('application');
//            }.bind(this));
//        }
//    }
// });
//  the above came from http://vikram-s-narayan.github.io/blog/authentication-with-ember-and-firebase-part-1/