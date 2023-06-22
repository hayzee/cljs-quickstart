;(require 'cljs.main)
;
;;(def compile-opts
;;  {
;;   :output-to "resources/public/main.js"
;;   })
;
;(def repl-opts
;  {
;   :launch-browser false
;   })
;
;(defn start
;  []
;  (cljs.main/-main
;    ;"--compile-opts" (str compile-opts)
;    "--repl-opts" (str repl-opts)))
;
;;(ns user
;;  (:require [cljs.main :as cljs]
;;            [cljs.cli :as cli]))
;
;;(cljs/-main)
;
;(comment
;  (cljs.main/main "--repl-opts" "{:launch-browser false}")
;  )
;
;;(defn start
;;  []
;;  (cljs/-main "--repl-opts" "{:launch-browser false}"))
;;
;;(println "Ready!")
;
;;(defn -main [& args]
;;
;;  (clojure.pprint/pprint args)
;;
;;  (let [args (cljs/normalize (cli/normalize cli/default-commands args))
;;        pred (complement #{"-re" "--repl-env"})
;;        [pre post] ((juxt #(take-while pred %)
;;                          #(drop-while pred %))
;;                    args)
;;        [js-args args] ((juxt #(take 2 %) #(drop 2 %)) post)
;;        repl-opt (#'cljs/get-js-opt js-args)
;;
;;        _ (println repl-opt)
;;        ]
;;    (try
;;      (apply cli/main repl-opt (concat pre args))
;;      (finally
;;        (shutdown-agents)))))
;;
;;(-main "--repl-opts" "{:launch-browser false}")
;;
;;(comment
;;  ; (cljs/-main "--repl-opts" "{:launch-browser false}")
;;  )
