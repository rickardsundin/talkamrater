(defproject talkompisar "0.1.0-SNAPSHOT"
  :description "Talkompisar!"
  :plugins [[lein-cljsbuild "1.1.5"]]
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.omcljs/om "1.0.0-alpha34"]
                 [racehub/om-bootstrap "0.6.1"]
                 [figwheel-sidecar "0.5.0-SNAPSHOT" :scope "test"]]
  :cljsbuild {
              :builds {:release
                       {:source-paths ["src"]
                        :compiler {:output-to "resources/public/js/main.js"
                                   :optimizations :advanced 
                                   :pretty-print false}}}})
