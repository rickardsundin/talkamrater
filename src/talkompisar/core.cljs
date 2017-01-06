(ns talkompisar.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om-tools.dom :as d :include-macros true]
            [om-bootstrap.button :as b]
            [om-bootstrap.panel :as p]
            [om-bootstrap.random :as r]))

(def app-state (atom {:total 5}))

(defn mattetal
  [first total]
  (str first " + " (- total first) " = " total))

(defui Talkompisar
  Object
  (render [this]
          (let [{:keys [total]} (om/props this)]
            (d/div {:class "container"}
                   (d/div {:class "container"}
                    (b/toolbar {}
                               (b/button-group {}
                                               (b/button {:onClick (fn [e] (swap! app-state update-in [:total] dec))}
                                                         (r/glyphicon {:glyph "minus"}))
                                               (b/button {:onClick (fn [e] (swap! app-state update-in [:total] inc))}
                                                         (r/glyphicon {:glyph "plus"})))))
                   
                   (d/div {:class "container text-center"}
                          (p/panel {:header (d/h2 (str total "-kompisar"))
                                    :bs-style "primary"}
                                   (map #(d/h3 (mattetal % total)) (range (inc total)))))))))

(def reconciler (om/reconciler {:state app-state}))

(om/add-root! reconciler Talkompisar (gdom/getElement "app"))

