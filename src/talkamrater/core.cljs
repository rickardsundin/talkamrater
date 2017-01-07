(ns talkamrater.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om-tools.dom :as d :include-macros true]
            [om-bootstrap.button :as b]
            [om-bootstrap.panel :as p]
            [om-bootstrap.random :as r]))

(def app-state (atom {:total 5}))

(defn read [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

(defn mutate [{:keys [state] :as env} key params]
  (if (= 'increment key)
    {:value {:keys [:total]}
     :action #(swap! state update-in [:total] inc)}
    (if (= 'decrement key)
      {:value {:keys [:total]}
       :action #(swap! state update-in [:total] dec)}
      {:value :not-found})))

(defn toolbar
  [this]
  (b/toolbar {}
             (b/button-group {}
                             (b/button {:onClick (fn [e] (om/transact! this '[(decrement)]))}
                                       (r/glyphicon {:glyph "minus"}))
                             (b/button {:onClick (fn [e] (om/transact! this '[(increment)]))}
                                       (r/glyphicon {:glyph "plus"})))))

(defn talkamrat
  [first total]
  (d/h3 (str first " + " (- total first) " = " total)))
  
(defn talkamrater
  [total]
  (p/panel {:header (d/h2 (str total "-kompisar"))
            :bs-style "primary"}
           (map #(talkamrat % total) (range (inc total)))))

(defui RootView
  static om/IQuery
  (query [this]
         [:total])
  Object
  (render [this]
          (let [{:keys [total]} (om/props this)]
            (d/div {:class "container"}
                   (d/div {:class "container"}
                          (toolbar this))
                   (d/div {:class "container text-center"}
                          (talkamrater total))))))

(def reconciler (om/reconciler {:state app-state :parser (om/parser {:read read :mutate mutate})}))

(om/add-root! reconciler RootView (gdom/getElement "app"))

